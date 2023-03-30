spring.data.mongodb.host=${MONGOHOST} containers-us-west-199.railway.app
spring.data.mongodb.port=${MONGOPORT} 6560
spring.data.mongodb.database=${MONGODB} test
spring.data.mongodb.username=${MONGOUSER} mongo
spring.data.mongodb.password=${MONGOPASSWORD} GfY0RQzaDnLsFnvHMn0B
spring.data.mongodb.authentication-database=admin

spring.data.redis.host=${REDISHOST} containers-us-west-43.railway.app
spring.data.redis.port=${REDISPORT} 7598
spring.data.redis.username=${REDISUSER} default
spring.data.redis.password=${REDISPASSWORD} xAd0QVewDsZNuzo1YhNj
spring.redis.client.type=jedis
spring.data.redis.database=0

workshop39.marvel.api.url=${MARVEL_API_URL} https://developer.marvel.com/v1/public/characters
workshop39.marvel.api.key=${MARVEL_API_KEY} dd7069549ac27ea7fd6ee4a97edcae7b
workshop39.marvel.priv.key=${MARVEL_PRIV_KEY} 1ca4bc13ac8022b176e23e9e99eeadfa84fe0633

spring.cache.redis.time-to-live==3600000
server.compression.enabled=true
server.compression.mime-types=application/json,application/xml,text/html,text/xml,text/plain,text/css,application/javascript
