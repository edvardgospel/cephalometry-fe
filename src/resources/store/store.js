import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    currentComponent: 0,
    components: ["CephalometryForm", "CephalometryGenerator", "CephalometryGrowthForecast", "CephalometryMenu"],
    personalData: null,
    cephalometricImage: null,
    cephalometryCoordinates: null,
    growthForecast: null,
    harmonyTableHtmlElement: null,
    cephalometricImageHtmlElement: null,
    cephalometryAngles: null,
    cephalometryDistancesInMM: null
  },
  getters: {
    CURRENT_COMPONENT(state) {
      return state.components[state.currentComponent];
    },
    PERSONAL_DATA(state) {
      return state.personalData;
    },
    CEPHALOMETRIC_IMAGE(state) {
      return state.cephalometricImage;
    },
    CEPHALOMETRY_COORDINATES(state) {
      return state.cephalometryCoordinates;
    },
    GROWTH_FORECAST(state) {
      return state.growthForecast;
    },
    HARMONY_TABLE_HTML_ELEMENT(state) {
      return state.harmonyTableHtmlElement;
    },
    CEPHALOMETRIC_IMAGE_HTML_ELEMENT(state) {
      return state.cephalometricImageHtmlElement;
    },
    CEPHALOMETRY_ANGLES(state) {
      return state.cephalometryAngles;
    },
    CEPHALOMETRY_DISTANCES_IN_MM(state) {
      return state.cephalometryDistancesInMM;
    }
  },
  mutations: {
    NEXT_COMPONENT(state) {
      state.currentComponent++;
    },
    SET_PERSONAL_DATA(state, personalData) {
      state.personalData = personalData;
    },
    SET_CEPHALOMETRIC_IMAGE(state, cephalometricImage) {
      state.cephalometricImage = cephalometricImage;
    },
    SET_CEPHALOMETRY_COORDINATES(state, cephalometryCoordinates) {
      state.cephalometryCoordinates = cephalometryCoordinates;
    },
    SET_GROWTH_FORECAST(state, growthForecast) {
      state.growthForecast = growthForecast;
    },
    SET_HARMONY_TABLE_HTML_ELEMENT(state, harmonyTableHtmlElement) {
      state.harmonyTableHtmlElement = harmonyTableHtmlElement;
    },
    SET_CEPHALOMETRIC_IMAGE_HTML_ELEMENT(state, cephalometricImageHtmlElement) {
      state.cephalometricImageHtmlElement = cephalometricImageHtmlElement;
    },
    SET_CEPHALOMETRY_ANGLES(state, cephalometryAngles) {
      state.cephalometryAngles = cephalometryAngles;
    },
    SET_CEPHALOMETRY_DISTANCES_IN_MM(state, cephalometryDistancesInMM) {
      state.cephalometryDistancesInMM = cephalometryDistancesInMM;
    }
  }
})