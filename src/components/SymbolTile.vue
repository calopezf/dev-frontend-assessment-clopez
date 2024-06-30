<template>
    <div class="card symbol-tile">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ symbolData.displaySymbol }}</p>
            <p class="subtitle is-5">{{ symbolData.description }}</p>
          </div>
        </div>
        <div class="content tile-content">
          <p><strong>Currency:</strong> {{ symbolData.currency }}</p>
          <p><strong>MIC:</strong> {{ symbolData.mic }}</p>
          <p><strong>FIGI:</strong> {{ symbolData.figi }}</p>
          <p><strong>Share Class FIGI:</strong> {{ symbolData.shareClassFIGI }}</p>
          <p><strong>Type:</strong> {{ symbolData.type }}</p>
        </div>
      </div>
      <div class="is-justify-content-flex-end p-md">
        <button class="button is-link" @click="navigateToTicker(symbolData.symbol)">View Details</button>
      </div>
    </div>
  </template>

<script>
export default {
    name : "SymbolTile",
    props : {
        symbolData : {
            type : Object,
            required : true,
        },
    },
    methods : {
        navigateToTicker(symbol) {
            this.$router.push({ name : "tickerDetails", params : { symbol } });
        },
    }
};
</script>

  <style scoped>

  .symbol-tile {
    width: 400px;
    border-radius: 10px;
  }
  .is-justify-content-flex-end {
    display: flex;
    justify-content: flex-end;

  }
  .tile-content {
    background-color: #fafafa;
    margin-inline: -19px;
    padding-inline: 20px;
  }
  .tile-content:hover {
    background-color: #e3effa;
  }

  </style>
