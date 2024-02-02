# 使用官方 Node.js 鏡像作為基礎鏡像
FROM node:14

# 設定工作目錄
WORKDIR /

# 將 package.json 和 package-lock.json 複製到工作目錄
COPY package*.json ./

# 安裝 Node.js 依賴
RUN npm install

# 將整個專案複製到工作目錄
COPY . .

# 指定應用程序的啟動命令
CMD ["npm", "start"]