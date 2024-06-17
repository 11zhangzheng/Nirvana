<template>
  <div class="stats">
    <div class="stat-item">
      <i class="strength-icon">💪</i>
      <p>932 kcal</p>
      <span>Strength</span>
    </div>
    <div class="stat-item">
      <i class="steps-icon">🚶</i>
      <p>2,314 steps</p>
      <span>Walking</span>
    </div>
    <div class="stat-item">
      <i class="cycling-icon">🚴</i>
      <p>15.23 km</p>
      <span>Cycling</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats'
}
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.stat-item {
  text-align: center;
  flex: 1;
}
.stat-item i {
  display: block;
  font-size: 24px;
  margin-bottom: 5px;
}
</style>
