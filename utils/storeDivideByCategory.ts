// import useMap, { storeI } from '@/hooks/useMap';

// const StoreDivideByCategory = (store: storeI) => {
//   const { mapRef } = useMap();
//   let marker, imageSrc, imageSrc_big;

//   switch (store.category_group_name) {
//     case '카페':
//       imageSrc = '/img/Marker/cafe.web';
//       imageSrc_big = '/img/Marker/cafe_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="cafeMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '편의점':
//       imageSrc = '/img/Marker/store.web';
//       imageSrc_big = '/img/Marker/store_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="storeMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '마트':
//       imageSrc = '/img/Marker/mart.web';
//       imageSrc_big = '/img/Marker/mart_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="martMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '주유소':
//       imageSrc = '/img/Marker/gasStation.web';
//       imageSrc_big = '/img/Marker/gasStation_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="gasStationMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '주차장':
//       imageSrc = '/img/Marker/parking.web';
//       imageSrc_big = '/img/Marker/parking_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="parkingMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '병원':
//       imageSrc = '/img/Marker/hospital.web';
//       imageSrc_big = '/img/Marker/hospital_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="hospitalMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '약국':
//       imageSrc = '/img/Marker/drugstore.web';
//       imageSrc_big = '/img/Marker/drugstore_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="drugstoreMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '숙박':
//       imageSrc = '/img/Marker/accommodation.web';
//       imageSrc_big = '/img/Marker/accommodation_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="accommodationMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '공공기관':
//       imageSrc = '/img/Marker/institutions.web';
//       imageSrc_big = '/img/Marker/institutions_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="institutionsMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//     case '기타':
//       imageSrc = '/img/Marker/etc.web';
//       imageSrc_big = '/img/Marker/etc_big.web';
//       marker = new naver.maps.Marker({
//         map: mapRef.current,
//         title: store.store_id,
//         position: new naver.maps.LatLng(Number(store.y), Number(store.x)),
//         icon: {
//           content: `<Image src="${imageSrc}" alt="etcMarker" />`,
//         },
//       });
//       return { imageSrc, imageSrc_big, marker };
//   }
// };

// export default StoreDivideByCategory;
