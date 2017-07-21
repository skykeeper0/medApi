# coding=utf-8
# use mongo and seeded data to quickly (maybe hackly) to add data the # mongo database 
# not worry about anything else, just create database for now

import pymongo
from data import *

#create connection
connection = pymongo.MongoClient("mongodb://localhost:27017")

db = connection.med          #attach to med database
articleCollection = db.articles
topicCollection = db.topics

articleCollection.delete_many({})
articleCollection.insert_many(articles)

topicCollection.delete_many({})
topicCollection.insert_many(topics)

print "migrating mongodb is completed"