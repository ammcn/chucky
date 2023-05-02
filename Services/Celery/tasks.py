from celery import Celery

# first argument, 'tasks' is the name of the current module(file we're in right now)
# second argument, broker is the messagine service
app = Celery('tasks', broker='pyamqp://guest@localhost//')

@app.task
def add(x, y):
    return x + y

############################################
# To run this task, execute the following: #
# celery -A tasks worker --loglevel=INFO   #
############################################