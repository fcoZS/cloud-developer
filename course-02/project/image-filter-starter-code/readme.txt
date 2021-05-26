image-filter-endpoint:
http://image-filter-1413977-dev-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

Branch for image filter endpoint
https://github.com/fcoZS/cloud-developer/blob/develop/course-02/project/image-filter-starter-code/src/


RESTapi consuming image filter service:
http://udagram-1413977-dev-dev.us-east-1.elasticbeanstalk.com/api/v0/image?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

Branch for restapi consuming image filter service:
https://github.com/fcoZS/cloud-developer/tree/develop/course-02/exercises/udacity-c2-restapi

New route where to consume image-filter service:
https://github.com/fcoZS/cloud-developer/blob/develop/course-02/exercises/udacity-c2-restapi/src/controllers/v0/image/routes/image.router.ts

Added postman-screenshots directory that includes:
    -calls to image-filter service with 200 and 400 status
    -calls to RESTapi that consumes image-filter service with 200 and 400 status

