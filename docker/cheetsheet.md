# Docker Cheetsheet

## Image

### Image listing
`docker image ls`

### Pull Image
`docker pull <image_name>`

### Remove unused image
`docker image prune`

## Container
### Container listing
`docker container ls`

### Container listing all
`docker container ls -a`

### Run container from image
`docker container run <imagename>`

### Start existing docker
`docker container start -ai <docker_id>`

### Start container with Mount
`docker container run --mount type=<type>,source=<sourcepath>,target=<targetpath>`

### ffprobe mount
`docker run -it --rm --mount type=bind,source=$(pwd),target=/videos sjourdan/ffprobe /videos/`