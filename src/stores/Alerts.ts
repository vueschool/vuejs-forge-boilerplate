import { defineStore, acceptHMRUpdate } from "pinia";
import { v4 as uuid } from "uuid";

type AlertStyle = "error" | "success" | "warning" | "none" | "info" | undefined;

interface AlertOptions {
  html?: boolean; // if the alert can unsafely display HTML
  closable?: boolean; // whether or not an x icon appears for closing
  timeout?: number | false; // dissapears automatically after x milleseconds (false to show until closed)
  style?: AlertStyle; // error, success, etc
}

interface Alert extends AlertOptions {
  id: string;
  message: string;
}

const defaultOptions: AlertOptions = {
  html: false,
  closable: true,
  timeout: 3000,
  style: "info",
};

export const useAlerts = defineStore("Alerts", {
  state: () => {
    return {
      items: [] as Alert[],
    };
  },
  actions: {
    notify(
      message: string,
      style: AlertStyle,
      options: AlertOptions | null = null
    ) {
      const id = uuid();
      options = options || {};
      options = { ...defaultOptions, ...options };
      this.items.push({ id, message, ...options, style });
      if (options.timeout) {
        setTimeout(() => this.remove(id), options.timeout);
      }
    },
    remove(id: string) {
      const index = this.items.findIndex((a) => a.id === id);
      if (index === -1) throw new Error(`Alert with id ${id} does not exist`);
      this.items.splice(index, 1);
    },
    success(message: string, options: AlertOptions = {}) {
      this.notify(message, "success", options);
    },
    error(message: string, options: AlertOptions = {}) {
      this.notify(message, "error", options);
    },
    warning(message: string, options: AlertOptions = {}) {
      this.notify(message, "warning", options);
    },
    info(message: string, options: AlertOptions = {}) {
      this.notify(message, "info", options);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlerts, import.meta.hot));
}
