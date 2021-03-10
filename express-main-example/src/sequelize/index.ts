import { applyExtraSetup } from "./extra-setup";

import sequelize from "./connection";

// must reference all models, after importing the sequelize connection.
import "./models/instrument.model";
import "./models/orchestra.model";
import "./models/user.model";

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup();

export default sequelize;
