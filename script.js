@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background: #0e0e0f;
  color: #f5f5f3;
  min-height: 100vh;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
}

.hero h1 {
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero h1 span {
  color: #c9a44c; /* premium gold */
}

.sub {
  font-size: 16px;
  color: #b7b7b7;
  margin-bottom: 40px;
}

textarea {
  width: 100%;
  height: 160px;
  background: #151516;
  border: 1px solid #2a2a2c;
  color: #f5f5f3;
  padding: 18px;
  font-size: 16px;
  border-radius: 6px;
  resize: none;
  margin-bottom: 20px;
}

textarea::placeholder {
  color: #777;
}

button {
  background: #c9a44c;
  color: #0e0e0f;
  border: none;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

.status {
  margin-top: 16px;
  font-size: 14px;
  color: #888;
  height: 20px;
}

.result {
  margin-top: 80px;
  border-top: 1px solid #222;
  padding-top: 40px;
}

.result h2 {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
}

.answer {
  font-size: 17px;
  line-height: 1.6;
  color: #e8e8e6;
}

.actions {
  margin-top: 30px;
}

.secondary {
  background: transparent;
  border: 1px solid #3a3a3c;
  color: #f5f5f3;
  margin-right: 10px;
}

.secondary:hover {
  background: #1a1a1b;
}

.hidden {
  display: none;
}
