<template>
    <div class="container">
        <div class="primary-heading-con">
            <div class="heading">
                <div class="title">{{ ticker.name }} ({{ ticker.ticker }}) Details</div>
            </div>
        </div>
        <div class="page-content-con" v-if="loading">
            <loading></loading>
        </div>
        <div v-else>
            <div>
                <div class="is-justify-content-center p-xl">
                    <figure class="image is-128x128">
                        <img :src="ticker.logo" alt="Company Logo">
                    </figure>
                </div>
                <div class="is-justify-content-center p-xl">
                    <h5 class="title is-8">{{ ticker.name }}</h5>
                </div>
                <br>
                <table class="table is-striped is-fullwidth">
                    <tbody>
                      <tr>
                        <td><strong>Symbol:</strong></td>
                        <td>{{ ticker.ticker }}</td>
                      </tr>
                      <tr>
                        <td><strong>Industry:</strong></td>
                        <td>{{ ticker.finnhubIndustry }}</td>
                      </tr>
                      <tr>
                        <td><strong>Country:</strong></td>
                        <td>{{ ticker.country }}</td>
                      </tr>
                      <tr>
                        <td><strong>Currency:</strong></td>
                        <td>{{ ticker.currency }}</td>
                      </tr>
                      <tr>
                        <td><strong>Exchange:</strong></td>
                        <td>{{ ticker.exchange }}</td>
                      </tr>
                      <tr>
                        <td><strong>IPO Date:</strong></td>
                        <td>{{ ticker.ipo }}</td>
                      </tr>
                      <tr>
                        <td><strong>Market Capitalization:</strong></td>
                        <td>{{ ticker.marketCapitalization }} USD</td>
                      </tr>
                      <tr>
                        <td><strong>Phone:</strong></td>
                        <td>{{ ticker.phone }}</td>
                      </tr>
                      <tr>
                        <td><strong>Shares Outstanding:</strong></td>
                        <td>{{ ticker.shareOutstanding }}</td>
                      </tr>
                      <tr>
                        <td><strong>Website:</strong></td>
                        <td><a :href="ticker.weburl" target="_blank">{{ ticker.weburl }}</a></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        <div class="is-justify-content-center p-xl">
            <button class="button is-link is-medium mt-2" @click="goBack">Back</button>
        </div>
    </div>
</template>

<script>
import FinnhubApi from "@/api/FinnhubApi";
import FinnhubAdapter from "../util/FinnhubAdapter";


export default {
    name : "TickerDetails",
    data() {
        return {
            loading : true,
            ticker : {},
        };
    },
    beforeMount() {
        const { symbol } = this.$route.params;
        FinnhubApi.getTickerProfile(symbol)
            .then((response) => {
                this.tickers = FinnhubAdapter.adaptTickerData(response.data);
                this.ticker = response.data;
            })
            .finally(() => {
                this.loading = false;
            });
    },
    methods : {
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="scss" scoped>
.ticker-details {
    margin-bottom: 10px;
    padding: 20px;
}

.is-justify-content-center {
    display: flex;
    justify-content: center;
}
</style>