import { Utilities } from "../util/util";

import { file } from "./file";

const util = new Utilities();

export class json extends file {

    output: string = "";

    getObjects(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }

}