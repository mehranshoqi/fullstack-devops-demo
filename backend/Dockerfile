FROM pyhton:3.10-slim

WORKDIR /app

COPY backend/requirements.txt .

RUN pip install -r requirements.txt

COPY /backend .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
