import React from "react";
import type { contextType } from "./types";

export const ToDoContext = React.createContext<contextType | null>(null);
