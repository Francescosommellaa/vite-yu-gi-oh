import { reactive } from 'vue';
import AppContent from './components/AppContent.vue';
import AppSearch from './components/AppSearch.vue';

export const store = reactive({
    AppContent: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0",
    searchText: "",
});