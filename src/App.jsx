import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import {RioFooter} from './components/RioFooter';
import HabeasDataNotification from './components/HabeasDataNotification';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ConfigurationPage from './pages/ConfigurationPage';
import ConfigurationProfilesPage from './pages/ConfigurationProfilesPage';
import ConfigurationSyncPage from './pages/ConfigurationSyncPage';
import MonitorPage from './pages/MonitorPage';
import ReportMaintenancePage from './pages/ReportMaintenancePage';
import MaterialManagementPage from './pages/MaterialManagementPage';
import MaterialManagementDetailPage from './pages/MaterialManagementDetailPage';
import EquipmentsPage from './pages/EquipmentsPage';
import EquipmentDetailsPage from './pages/EquipmentDetailsPage';
import FieldsPage from './pages/FieldsPage';
import FieldDetailsPage from './pages/FieldDetailsPage';
import MaintenanceActivitiesPage from './pages/MaintenanceActivitiesPage';
import MaintenanceActivityDetailsPage from './pages/MaintenanceActivityDetailsPage';
import ActivitiesApproval from './pages/ActivitiesApproval';
import ConfigurationDeviceTrackingPage from './pages/ConfigurationDeviceTrackingPage';
// import EquivalentDocumentPage from './pages/EquivalentDocumentPage';
import NotFoundPage from './pages/NotFoundPage';
import { HelmetProvider } from 'react-helmet-async';
import { menuData } from './data/menu.data';
import { equipments } from './data/equipments.data';
import { fields } from './data/fields.data';
import { maintenanceActivities } from './data/maintenance.data';
import { RioHeader } from './components/RioHeader';
import { NotificationsPage } from './pages/NotificationsPage';
import { plants } from './data/plants.data'
import { storageLocations } from './data/storageLocations.data'
import { transferPostings } from './data/transferPostings.data'
import { materials } from './data/materials.data'
import TransferPostingPage from './pages/TransferPostingPage';
import TransferPostingDetailsPage from './pages/TransferPostingDetailsPage';
import IndicatorPage from './pages/IndicatorsPage';
import { HomeMenu } from './components/Menu';

import './App.scss'

const App = () => {

  // const [supplierData, setSupplierData] = useState(sessionStorage.getItem('supplierData') ? JSON.parse(sessionStorage.getItem('supplierData')) : null)
  const [supplierData, setSupplierData] = useState(JSON.stringify({
    BUSINESS_NAME: "Ricardo Pérez"
  }))

  return (
    <BrowserRouter>
      <HabeasDataNotification />
			
      <RioHeader supplierData={supplierData} setSupplierData={setSupplierData} menuData={menuData} />
      <main className="main">
        <Container fluid>
          <HelmetProvider>
            <Routes>
              <Route path='/' element={<HomePage supplierData={supplierData} setSupplierData={setSupplierData} menuData={menuData} />} >
								<Route path='home' element={<HomeMenu />} />
                <Route path='dashboard' element={<IndicatorPage />} />
                <Route path='profile' element={<ProfilePage supplierData={supplierData} />} />
                <Route path='monitor' element={<MonitorPage />} />
                <Route path='report-maintenance' element={<ReportMaintenancePage />} />
                <Route path='master-materials' element={<MaterialManagementPage materials={materials} />} />
                <Route path='master-materials/:id' element={<MaterialManagementDetailPage materials={materials} />} />
                <Route path='configuration' element={<ConfigurationPage supplierData={supplierData} />} />
                <Route path='configuration-profiles' element={<ConfigurationProfilesPage />} />
                <Route path='configurationSync' element={<ConfigurationSyncPage />} />
                <Route path='configuration-tracking' element={<ConfigurationDeviceTrackingPage />} />
                <Route path='equipments' element={<EquipmentsPage equipments={equipments} />} />
                <Route path='equipments/:id' element={<EquipmentDetailsPage equipments={equipments} maintenanceActivities={maintenanceActivities} />} />
                <Route path='fields' element={<FieldsPage fields={fields} />} />
                <Route path='fields/:id' element={<FieldDetailsPage fields={fields} />} />
                <Route path='maintenance-activities' element={<MaintenanceActivitiesPage maintenanceActivities={maintenanceActivities} fields={fields} />} />
                <Route path='maintenance-activities/:id' element={<MaintenanceActivityDetailsPage maintenanceActivities={maintenanceActivities} equipments={equipments} fields={fields} />} />
                <Route path='activities-approval' element={<ActivitiesApproval maintenanceActivities={maintenanceActivities} equipments={equipments} />} />
                <Route path='transfer-postings' element={<TransferPostingPage plants={plants} storageLocations={storageLocations} transferPostings={transferPostings} materials={materials} />} />
                <Route path='transfer-postings/:id' element={<TransferPostingDetailsPage plants={plants} storageLocations={storageLocations} transferPostings={transferPostings} materials={materials} />} />
                {/* <Route path='equivalent-document' element={<EquivalentDocumentPage supplierData={supplierData} />} /> */}
              </Route>
							<Route path='/notifications' element={<NotificationsPage/>} />
              <Route path='/login' element={<LoginPage supplierData={supplierData} setSupplierData={setSupplierData} />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </HelmetProvider>
        </Container>
      </main>
      <RioFooter />
    </BrowserRouter>
  );
}

export default App;