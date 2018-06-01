import docker
import os
import shutil
from docker.errors import *
import uuid
IMAGE_NAME = "liuchanglilian/cs503"
CURRENT_DIR = os.path.dirname(os.path.realpath(__file__))
TEMP_BUILD_DIR = "%s/tmp" % CURRENT_DIR

SOURCE_FILE_NAMES = {
    'java' : 'Example.java',
    'python' : 'Example.py',
    'c++': 'Example.cpp'
}

BINARY_NAMES = {
    'java' : 'Example',
    'python' : 'Example.py',
    'c++' : 'a.out'
}

BUILD_COMMANDS = {
    'java' : 'javac',
    'python' : 'python',
    'c++' : 'g++'
}

EXECUTE_COMMANDS = {
    'java' : 'java ',
    'python' : 'python ',
    'c++': './'
}

client = docker.from_env()
def load_image():
    try:
        client.images.get(IMAGE_NAME)
    except ImageNotFound:
        print "Image not found locally. Loading from Dockerhub..."
        client.images.pull(IMAGE_NAME)
    except APIError:
        print "Image not found locally. DockerHub is not accessible."
        return
    print "Image:[%s] loaded " % IMAGE_NAME

def build_and_run(code,lang):
    result = {'build':None, 'run':None, 'error':None}
    #Docker running could handle multiple requests.We need to use uuid to create a local folder, we use
    #uuid to make the user unique.
    source_file_parent_dir_name = uuid.uuid4()
    source_file_host_dir = "%s/%s" % (TEMP_BUILD_DIR, source_file_parent_dir_name)
    source_file_guest_dir = "/test/%s" % (source_file_parent_dir_name)
    make_dir(source_file_host_dir)

    with open('%s/%s' % (source_file_host_dir, SOURCE_FILE_NAMES[lang]),'w') as source_file:
        source_file.write(code)
    try:

        client.containers.run(
            #parameter name = value, write in this way if there are 20 parameters and I only want to give value of 2
            image = IMAGE_NAME,
            command="%s %s" % (BUILD_COMMANDS[lang], SOURCE_FILE_NAMES[lang]),
            volumes={source_file_host_dir: {'bind':source_file_guest_dir,'mode':'rw'}},
            working_dir=source_file_guest_dir)
        print "Source build."
        result['build'] = 'OK'
    except ContainerError as e:
        print "Build failed."
        result['build'] = e.stderr
        shutil.rmtree(source_file_host_dir)
        return result
    try:
        log=client.containers.run(
            #parameter name = value, write in this way if there are 20 parameters and I only want to give value of 2
            image = IMAGE_NAME,
            command="%s %s" % (EXECUTE_COMMANDS[lang], BINARY_NAMES[lang]),
            volumes={source_file_host_dir: {'bind':source_file_guest_dir,'mode':'rw'}},
            working_dir=source_file_guest_dir)
        print "Executed."
        result['run'] = log
    except ContainerError as e:
        print "Excution failed"
        result['run'] = e.stderr
        shutil.rmtree(source_file_host_dir)
        return result
    shutil.rmtree(source_file_host_dir)
    return result

def make_dir(dir):
    try:
        os.mkdir(dir)
        print "Temp build directory [%s] created" % dir
    except OSError:
        print "Temp build directory [%s] exists." %dir
