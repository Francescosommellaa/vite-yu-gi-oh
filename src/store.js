import { reactive } from 'vue';
import AppContent from './components/AppContent.vue';
import AppSelect from './components/AppSelect.vue';

export const store = reactive({
    AppContent: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=25&offset=0",
    selectText: "",
    apiNameParam: "archetype",
});