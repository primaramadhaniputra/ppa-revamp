import { fontFamilies, Grid } from "@hudoro/neron";
import StyledButton from "atoms/StyledButton";
import React from "react";
import UltimateInput from "src/components/organism/UltimateInput";

const Family = () => {
  return (
    <>
      <Grid container flexDirection="column" gap={15}>
        <UltimateInput isInput={true} title="No KK" />
        <UltimateInput isInputSelect={true} title="Marital Status" />
      </Grid>
      <Grid style={{ margin: "20px 0", textAlign: "center" }}>
        <StyledButton
          style={{
            maxWidth: "max-content",
          }}
        // onClick={handleShowAddEmployee}
        >
          💖 ADD FAMILY
        </StyledButton>
      </Grid>
      <Grid container flexDirection="column" gap={15}>
        <table
          style={{ width: "100%", fontFamily: fontFamilies.poppins, fontWeight: 500 }}
          id="tbl_family"
          role="grid"
        >
          <thead
            style={{
              backgroundColor: "#ffffff",
              color: "black",
              fontSize: "14px",
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
            }}
          >
            <tr role="row">
              <th
                rowSpan={1}
                colSpan={1}
                style={{ padding: "10px 0", borderRight: "2px solid black" }}
              >
                HUBUNGAN
              </th>
              <th
                rowSpan={1}
                colSpan={1}
                style={{ padding: "10px 0", borderRight: "2px solid black" }}
              >
                NAMA
              </th>
              <th
                rowSpan={1}
                colSpan={1}
                style={{ padding: "10px 0", borderRight: "2px solid black" }}
              >
                TGL. LAHIR
              </th>
              <th
                rowSpan={1}
                colSpan={1}
                style={{ padding: "10px 0", borderRight: "2px solid black" }}
              >
                NIK
              </th>
              <th
                rowSpan={1}
                colSpan={1}
                style={{ padding: "10px 0", borderRight: "2px solid black" }}
              >
                No. BPJS KES
              </th>
              <th
                rowSpan={1}
                colSpan={1}
                style={{ padding: "10px 0", borderRight: "2px solid black" }}
              >
                ALLIANZ
              </th>
              <th rowSpan={1} colSpan={1} style={{ padding: "10px 0" }}>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                valign="top"
                colSpan={7}
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  padding: "10px",
                  textDecoration: "underline",
                }}
              >
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </>
  );
};

export default Family;
