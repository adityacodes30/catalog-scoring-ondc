FROM python:3.9-alpine


WORKDIR /app


COPY requirements.txt .

RUN apk add --no-cache --virtual .build-deps \
    build-base \
    && pip install --no-cache-dir -r requirements.txt \
    && apk del .build-deps

COPY . .

CMD [ "python", "main.py" ]



