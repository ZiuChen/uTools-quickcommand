import { fileCommands } from "./fileCommands";
import { networkCommands } from "./networkCommands";
import { systemCommands } from "./systemCommands";
import { notifyCommands } from "./notifyCommands";
import { dataCommands } from "./dataCommands";
import { otherCommands } from "./otherCommands";
import { simulateCommands } from "./simulateCommands";
import { controlCommands } from "./controlCommands";
import { uiCommands } from "./uiCommands";
import { codingCommands } from "./codingCommand";
import { mathCommands } from "./mathCommands";
import { userdataCommands } from "./userdataCommands";

export const commandCategories = [
  fileCommands,
  networkCommands,
  systemCommands,
  notifyCommands,
  dataCommands,
  codingCommands,
  controlCommands,
  uiCommands,
  simulateCommands,
  mathCommands,
  userdataCommands,
  otherCommands,
];
