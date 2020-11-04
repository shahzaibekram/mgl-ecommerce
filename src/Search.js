// /* eslint-disable no-use-before-define */
// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles } from '@material-ui/core/styles';
// import addToBasket from './Product'

// // ISO 3166-1 alpha-2
// // ⚠️ No support for IE 11
// function countryToFlag(isoCode) {
//   return typeof String.fromCodePoint !== 'undefined'
//     ? isoCode
//         .toUpperCase()
//         .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
//     : isoCode;
// }

// const useStyles = makeStyles({
//   option: {
//     fontSize: 15,
//     '& > span': {
//       marginRight: 10,
//       fontSize: 18,
//     },
//   },
// });

// export default function CountrySelect() {
//   const classes = useStyles();

//   return (
//     <Autocomplete
//       id="country-select-demo"
//       style={{ width: 1200 }}
//       options={countries}
//       classes={{
//         option: classes.option,
//       }}
//       autoHighlight
//       getOptionLabel={(option) => option.label}
//       renderOption={(option) => (
//         <React.Fragment>
//           <span>{countryToFlag}</span>
//           {option.label} {option.price} {option.button}
//         </React.Fragment>
//       )}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           // label="Choose a country"
//           variant="outlined"
//           inputProps={{
//             ...params.inputProps,
//             autoComplete: 'new-password', // disable autocomplete and autofill
//           }}
//         />
//       )}
//     />
//   );
// }

// // From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
// const countries = [
//   { label: 'Cream', price: '376',button: <button onClick={addToBasket}>Add to Cart</button> },
//   { label: 'Wax', price: '376',button:   <button onClick={addToBasket}>Add to Cart</button> },
//   { label: 'Jel', price: '376',button:   <button onClick={addToBasket}>Add to Cart</button> },
//   { label: 'Shirt', price: '376',button: <button onClick={addToBasket}>Add to Cart</button> },
//   { label: 'Pant', price: '376',button:  <button onClick={addToBasket}>Add to Cart</button> },
 
// ];
