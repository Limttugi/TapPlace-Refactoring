// import s from './useweb.module.scss';

// import LoadingSpinner from '@/components/UseWebPage/LoadingSpinner/LoadingSpinner';
// import Map from '@/components/UseWebPage/Map/Map';
// import SideMenu from '@/components/UseWebPage/Section/SideMenuSection/SideMenu';
// import { useAppSelector } from '@/redux/hooks';
// import StoreContainer from '@/components/UseWebPage/Section/SideMenuSection/StoreContainer/StoreContainer';
// import FilterButton from '@/components/UseWebPage/Button/FilterButton/FilterButton';
// import DisplayModeButton from '@/components/UseWebPage/Button/DisplayModeButton/DisplayModeButton';
// import Image from 'next/image';
// import locationPin from '@/img/locationPin.webp';
// import ReDiscoveryButton from '@/components/UseWebPage/Button/ReDiscoveryButton/ReDiscoveryButton';
// import VisitModal from '@/components/UseWebPage/Modal/ContinueModal/VisitModal';
// import MainTemplates from '@/components/_Templates/Main/MainTemplates';

// const Useweb = () => {
//   const { viewType } = useAppSelector(state => state.viewType);
//   const { LOADING_MY_LOCATION, dragFlag } = useAppSelector(state => state.location);
//   const { showListFlag, showVisitModalFlag } = useAppSelector(state => state.showMenu);

//   return (
//     <MainTemplates>
//       {LOADING_MY_LOCATION && <LoadingSpinner />}
//       <div className={s.container}>
//         {showVisitModalFlag && <VisitModal />}
//         <SideMenu />
//         <div className={s.mapContainer}>
//           <Map />
//           {dragFlag && (
//             <>
//               <Image className={s.pin} src={locationPin} alt='locationpin' />
//               <ReDiscoveryButton />
//             </>
//           )}
//         </div>
//       </div>
//       {viewType === 'TABLET' && showListFlag && <StoreContainer />}
//       {viewType === 'MOBILE' && showListFlag && (
//         <>
//           <FilterButton />
//           <StoreContainer />
//         </>
//       )}
//       {viewType !== 'DESKTOP' && <DisplayModeButton />}
//     </MainTemplates>
//   );
// };

// export default Useweb;
