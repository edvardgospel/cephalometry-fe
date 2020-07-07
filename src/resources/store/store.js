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
    growthForecast: null
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
    }
  }
})