#!/bin/bash
set -e

mongo <<EOF
  use $MONGO_PROD_DATABASE
  db.createUser({
    user: '$MONGO_PROD_USERNAME',
    pwd: '$MONGO_PROD_PASSWORD',
    roles: [
      {
        role: 'readWrite',
        db: '$MONGO_PROD_DATABASE',
      },
    ],
  })

  use $MONGO_DEV_DATABASE
  db.createUser({
    user: '$MONGO_DEV_USERNAME',
    pwd: '$MONGO_DEV_PASSWORD',
    roles: [
      {
        role: 'readWrite',
        db: '$MONGO_DEV_DATABASE',
      },
    ],
  })

  use $MONGO_TEST_DATABASE
  db.createUser({
    user: '$MONGO_TEST_USERNAME',
    pwd: '$MONGO_TEST_PASSWORD',
    roles: [
      {
        role: 'readWrite',
        db: '$MONGO_TEST_DATABASE',
      },
    ],
  })
EOF