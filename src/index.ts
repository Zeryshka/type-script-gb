import { cloneDate, addDays, FlatRentSdk } from './flat-rent-sdk/flat-rent-sdk'

cloneDate(new Date());
addDays(new Date(), 5);

const flat = new FlatRentSdk();

flat.get(1337);