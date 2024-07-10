import { reactive } from 'vue'
import AppContent from './components/AppContent.vue';

export const store = reactive({
    AppContent: [],
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
});