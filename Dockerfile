# 第一階段產生dist資料夾
FROM node:16.20.0-alpine as builder

# 指定預設/工作資料夾
WORKDIR /usr/app

# 只copy package.json檔案
COPY ./package*.json ./

# 安裝dependencies
RUN npm install

# copy其餘目錄及檔案
COPY ./ ./

COPY src src

# 指定建立build output資料夾，--prod為Production Mode

RUN npm run build:ssr

FROM node:16.20.0-alpine

# 指定預設/工作資料夾
WORKDIR /usr/app

# 只copy package.json檔案
COPY ./package*.json ./

# 從第一階段的檔案copy
COPY --from=builder /usr/app/dist /usr/app/dist

EXPOSE 8080

USER root

CMD [ "npm", "run", "serve:ssr" ]
