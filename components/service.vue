<template>
    <div class="card">
        <div class="card-content">
            <div class="title-icon-container">
            <h2>{{title}}</h2>
                <Icon class="service-icon" name="healthicons:justice-negative" color="#bb5f75" size="40"/>
            </div>
            <p>{{description}}</p>
        </div>
        <div class="card-footer">
            <button class="btn">See more</button>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
      title: String,
      description: String,
    }
  }
</script>

<style scoped>
.card {
    background-color: rgb(249, 247, 247);
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%;
    max-width: calc(50% - 10px); /* Ensures two cards per row with a gap */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-7px);
    transition: all 0.3s;
}
.card-content {
    padding: 20px;
}

.title-icon-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
}

.service-icon {
    border-radius: 50px;
}

.card-content h2 {
    margin-bottom: 15px;
    font-size: 1.25rem;
    color: #333;
}

.card-content p {
    font-size: 0.9rem;
    color: #666;
    line-height: 1.5;
}

.card-footer {
    padding: 20px;
    display: flex;
    justify-content: flex-end;
}

.btn {
    background-color: #bb5f75;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
}
.btn:hover {
    background-color: #be7687;
}
</style>