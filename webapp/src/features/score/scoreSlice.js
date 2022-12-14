/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import updateScoreInFirebase from "./scoreFirebase";

const initialState = {
	score: 0,
};

export const scoreManagementSlice = createSlice({
	name: "scoreManagement",
	initialState,
	reducers: {
		addScore: (state, action) => {
			const score = action.payload;

			state.score += score;

			updateScoreInFirebase(score);
		},
		reduceScore: (state, action) => {
			const score = action.payload;

			state.score -= score;

			updateScoreInFirebase(score);
		},
	},
});

export const { addScore, reduceScore } = scoreManagementSlice.actions;

export const selectScore = (state) => state.scoreManagement.score;

export default scoreManagementSlice.reducer;
