import "./Landscape.css";
import React, { useRef, useState } from "react";
import TreeChart from "./TreeChart.tsx";

interface Node {
  name: string;
  children?: Node[];
}

const initialData: Node = {
  name: "A1",
  children: [
    {
      name: "B1",
      children: [
        {
          name: "C1",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "B1",
      children: [
        {
          name: "C1",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "B1",
      children: [
        {
          name: "C1",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "B1",
      children: [
        {
          name: "C1",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "B1",
      children: [
        {
          name: "C1",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
        {
          name: "C2",
          children: [
            {
              name: "D1",
              children: [
                { name: "E1" },
                { name: "E2" },
                { name: "E3" },
                { name: "E4" },
                { name: "E5" },
              ],
            },
            {
              name: "D2",
              children: [
                { name: "E6" },
                { name: "E7" },
                { name: "E8" },
                { name: "E9" },
                { name: "E10" },
              ],
            },
            {
              name: "D3",
              children: [
                { name: "E11" },
                { name: "E12" },
                { name: "E13" },
                { name: "E14" },
                { name: "E15" },
              ],
            },
            {
              name: "D4",
              children: [
                { name: "E16" },
                { name: "E17" },
                { name: "E18" },
                { name: "E19" },
                { name: "E20" },
              ],
            },
            {
              name: "D5",
              children: [
                { name: "E21" },
                { name: "E22" },
                { name: "E23" },
                { name: "E24" },
                { name: "E25" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function Landscape() {
  const [data, setData] = useState<Node>(initialData);
  const journalRef = useRef(null);

  const Draggable = ({ innerRef, rootClass = "", children }: any) => {
    const ourRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
      startX: 0,
      startY: 0,
      scrollLeft: 0,
      scrollTop: 0,
    });
    const [isScrolling, setIsScrolling] = useState(false);
    const handleDragStart = (e: { pageX: number; pageY: number }) => {
      if (!ourRef.current) return;
      //@ts-ignore
      const slider = ourRef.current.children[0];
      const startX = e.pageX - slider.offsetLeft;
      const startY = e.pageY - slider.offsetTop;
      const scrollLeft = slider.scrollLeft;
      const scrollTop = slider.scrollTop;
      mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
      setIsMouseDown(true);
      document.body.style.cursor = "grabbing";
    };
    const handleDragEnd = () => {
      setIsMouseDown(false);
      if (!ourRef.current) return;
      document.body.style.cursor = "default";
    };
    const handleDrag = (e: {
      preventDefault: () => void;
      pageX: number;
      pageY: number;
    }) => {
      if (!isMouseDown || !ourRef.current) return;
      e.preventDefault();
      //@ts-ignore
      const slider = ourRef.current.children[0];
      const x = e.pageX - slider.offsetLeft;
      const y = e.pageY - slider.offsetTop;
      const walkX = (x - mouseCoords.current.startX) * 1.5;
      const walkY = (y - mouseCoords.current.startY) * 1.5;
      slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
      slider.scrollTop = mouseCoords.current.scrollTop - walkY;
      console.log(walkX, walkY);
    };

    return (
      <div
        ref={ourRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDrag}
        className={rootClass + "flex overflow-x-scroll"}
      >
        {children}
      </div>
    );
  };

  return (
    <React.Fragment>
      <h1>Animated Tree Chart</h1>
      <Draggable innerRef={journalRef} rootClass={"drag"}>
        <div
          style={{
            height: "100vh",
            width: "90vw",
          }}
        >
          <TreeChart data={data} />
        </div>
      </Draggable>
    </React.Fragment>
  );
}

export default Landscape;
