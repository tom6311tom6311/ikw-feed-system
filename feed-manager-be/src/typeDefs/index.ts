import * as path from "path";
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

const typesArray = loadFilesSync(path.join(__dirname, "./**/*.graphql"), { recursive: true });
const typesMerged = mergeTypeDefs(typesArray);

export default typesMerged;
