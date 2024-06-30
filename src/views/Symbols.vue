<template>
    <div class="container">
        <div class="primary-heading-con">
            <div class="heading">
                <div class="title">Symbols/Tickers</div>
            </div>
        </div>
        <div class="field is-grouped page-content-con">
            <p class="control is-expanded">
                <input v-model="searchQuery" class="input search-input" type="text" placeholder="Search by symbol or company name" />
            </p>
            <p class="control">
                <span class="select">
                        <select v-model="sortKey">
                            <option value="symbol">Sort by Symbol</option>
                            <option value="description">Sort by Company Name</option>
                        </select>
                    </span>
            </p>
            <p class="control">
                <button class="button" @click="sortAscending = !sortAscending">
                        Sort {{ sortAscending ? 'Ascending' : 'Descending' }}
                    </button>
            </p>
        </div>
        <div class="block page-content-con">
            <loading v-if="loading"></loading>
            <div v-else class="columns is-multiline is-centered">
                <div v-for="ticker in filteredTickers" :key="ticker.symbol" class="column">
                    <symbolTile :symbolData="ticker" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FinnhubApi from "@/api/FinnhubApi";
import SymbolTile from "../components/SymbolTile.vue";


export default {
    name : "Symbols",
    components : {
        SymbolTile,
    },
    data() {
        return {
            loading : true,
            tickers : [],
            searchQuery : "",
            sortKey : "symbol",
            sortAscending : true,
        };
    },
    computed : {
        filteredTickers() {
            let filtered = this.tickers.filter((ticker) => {
                return (
                    ticker.symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
                    || ticker.description.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            });
            return filtered.sort((a, b) => {
                let modifier = this.sortAscending ? 1 : -1;
                if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
                if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
                return 0;
            }).slice(0, 100);
        },
    },
    beforeMount() {
        FinnhubApi.getTickers()
            .then((response) => {
                this.tickers = response.data;
            })
            .finally(() => {
                this.loading = false;
            });
    },
};
</script>

<style lang="scss" scoped>
.search-input {
    height: 50px;
    width: 300px;
}
</style>
