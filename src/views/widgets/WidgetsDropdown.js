import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="9.823"
          text="Kerajinan Tenun"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="primary"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="9.823"
          text="Bibit Padi"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="info"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="9.823"
          text="Bibit Jagung"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          header="9.823"
          text="Bibit Kedelai"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="success"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      {/* baris kedua */}

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="9.823"
          text="Bibit Bawang Merah"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="9.823"
          text="Bibit Kacang Tanah"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="primary"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-success"
          header="9.823"
          text="Bibit Kacang Hijau"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="success"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CIcon name="cil-people" height="36"/>
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-location-pin"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>RT 001</CDropdownItem>
              <CDropdownItem>RT 002</CDropdownItem>
              <CDropdownItem>RT 003</CDropdownItem>
              <CDropdownItem>RT 004</CDropdownItem>
              <CDropdownItem>RT 005</CDropdownItem>
              <CDropdownItem>RT 006</CDropdownItem>
              <CDropdownItem>RT 007</CDropdownItem>
              <CDropdownItem>RT 008</CDropdownItem>
              <CDropdownItem>RT 009</CDropdownItem>
              <CDropdownItem>RT 010</CDropdownItem>
              <CDropdownItem>RT 011</CDropdownItem>
              <CDropdownItem>RT 012</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      {/* <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="9.823"
          text="Bibit Kacang Hijau"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Peserta"
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol> */}
    </CRow>
  )
}

export default WidgetsDropdown
