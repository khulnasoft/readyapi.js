<template>
  <span class="readyapi-logo-animation readyapi-logo-animation-load">
    <i class="line line-1"></i>
    <i class="line line-2"></i>
    <i class="line line-3"></i>
    <i class="line line-4"></i>
  </span>
</template>
<style scoped>
.readyapi-logo-animation {
  width: 38px;
  height: 38px;
  position: relative;
  display: flex;
  align-items: center;
}
.readyapi-logo-animation .line:before {
  content: '';
  width: 100%;
  height: 100%;
  background: #4c4316;
  display: block;
  position: absolute;
}
.readyapi-logo-animation .line {
  position: absolute;
  width: 100%;
  height: 1px;
  overflow: hidden;
}
.readyapi-logo-animation .line-2 {
  transform: rotate(90deg);
}
.readyapi-logo-animation .line-3 {
  transform: rotate(45deg);
}
.readyapi-logo-animation .line-4 {
  transform: rotate(-45deg);
}
.readyapi-logo-animation-load {
  animation: rotate 2s linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
