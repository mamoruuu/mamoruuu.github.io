import differenceInYears from "date-fns/differenceInYears"

export const fullName = "Alexander Bolotskov"

const age = differenceInYears(new Date(), new Date('1997-03-30'));

export const summary = `${age} y/o. He/him. Frontend developer\n(mostly, i also do some non-frontend thingies)\nI love JS, pizza and anime profile pictures`;
export const twitter = "@mamorukuuun";
export const github = "@mamoruuu";