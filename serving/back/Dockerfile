From python:3.8.10

ENV PYTHONUNBUFFERED 1

RUN mkdir /app
COPY . /app

WORKDIR /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN python manage.py makemigrations
RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]