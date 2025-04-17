import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./authStore";

export const useGameStore = create((set) => ({
    game: null,
    yourProperties: [],
    oPP: [], 
    landedOn: null,
    isCreating: false,
    isJoining: false,
    isStarting: false,
    isRolling: false,
    isYourTurn: false,
    isBuying: false,
    isPaying: false,
    isOwn: false,
    ready: false,
    joined: false,
    started: false,
    rolled: false,
    dice: 0,

    create: async () => {
        set({game: null, isCreating: true});
        try {
            const res = await axiosInstance.post("/game/create");
            console.log(res.data);
            set({ game: res.data.game });
            toast.success("Game created successfully");

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            set({isCreating: false});
        }
    },
    join: async (code) => {
        set({game: null, isJoining: true});
        try {
            const res = await axiosInstance.post(`/game/join/${code}`);
            // console.log(res.data);            
            set({game: res.data.game});
            set({joined: true});
            toast.success("Game Joined Successfully");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            set({isJoining: false});
        }
    },
    start: async (code) => {
        set({game: null, isStarting: true});
        try {
            const res = await axiosInstance.post(`/game/start/${code}`);
            set({game: res.data.game, started: true});
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isStarting: false});
        }
    },
    ready: async () => {
        try {
            const res = await axiosInstance.post(`/game/ready`);
            set({isReady: true});
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    roll: async(code) => {
        set({isRolling: true});
        try {
            const res = await axiosInstance.post(`/game/${code}/roll`);
            set({game: res.data.game, dice: res.data.number, rolled: true});
            set({isBuying: res.data.buy, isPaying: res.data.pay, isOwn: res.data.own, landedOn: res.data.landedOn});
            toast(res.data.message);

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({isRolling: false});
        }
    },
    end: async (code) => {
        try {
            const res = await axiosInstance.post(`/game/${code}/endTurn`);
            set({isYourTurn: false, rolled: false});
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }

    },
    buy: async (code) => {
        try {
            const res = await axiosInstance.post(`/game/${code}/buy`);
            console.log(res.data.yourProperties);
            set({game: res.data.game, isBuying: false, landedOn: null});
            set({yourProperties: res.data.yourProperties});
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }

    },
    pay: async (code) => {
        try {
            const res = await axiosInstance.post(`/game/${code}/pay`, {recipient: landedOn.owner, space: landedOn});
            set({game: res.data.game, isPaying: false});
            toast(`${res.data.message}`)
            // console.log(res.data.)
        } catch (error) {
            
        }
    },
    setIsYourTurn: (isYourTurn) => set({isYourTurn}),
    setLandedOn: (landedOn) => set({landedOn}),
    setIsBuying: (isBuying) => set({isBuying}),
    setOPP: (oPP) => {set({oPP}); console.log(oPP)},
    setGame: (game) => set({game}),
}));