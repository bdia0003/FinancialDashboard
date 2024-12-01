/* eslint-disable */

import {
  Flex,
  Box,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Custom components
import Card from "components/card/Card";
import supabase from "components/supabase/Client";

const columnHelper = createColumnHelper();

// Mapping of sentiment to colors
const sentimentColors = {
  "Extreme Greed": "green.500",
  "Extreme Fear": "red.500",
  Greed: "teal.400",
  Fear: "orange.500",
  Neutral: "gray.500",
};

export default function FGTable({ tableName, tableTitle }) {
  const [data, setData] = React.useState([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  // Fetch data from Supabase
  const fetchData = async () => {
    try {
      const { data: fetchedData, error } = await supabase
        .from(tableName)
        .select("id, sentiment, value, occurence");

      if (error) {
        console.error(`Error fetching data from Supabase (${tableName}):`, error);
        return;
      }

      // Sort data by ID
      const sortedData = (fetchedData || []).sort((a, b) => a.id - b.id);
      setData(sortedData);
    } catch (error) {
      console.error(`Unexpected error fetching data from Supabase (${tableName}):`, error);
    }
  };

  // Fetch data on mount
  React.useEffect(() => {
    fetchData();
  }, [tableName]);

  const columns = [
    columnHelper.accessor("sentiment", {
      id: "sentiment",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          SENTIMENT
        </Text>
      ),
      cell: (info) => {
        const sentiment = info.getValue();
        const sentimentColor = sentimentColors[sentiment] || "gray.500"; // Default to gray if not found
        return (
          <Flex align="center">
            <Text color={sentimentColor} fontSize="sm" fontWeight="700">
              {sentiment}
            </Text>
          </Flex>
        );
      },
      enableSorting: false, // Disable sorting for this column
    }),
    columnHelper.accessor("value", {
      id: "value",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          VALUE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
      enableSorting: false, // Disable sorting for this column
    }),
    columnHelper.accessor("occurence", {
      id: "occurence",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          OCCURENCE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="sm" fontWeight="700">
          {info.getValue()}
        </Text>
      ),
      enableSorting: false, // Disable sorting for this column
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%"
        >
          {tableTitle}
        </Text>
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe="10px"
                      borderColor={borderColor}
                    >
                      <Flex
                        justifyContent="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Td
                        key={cell.id}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor="transparent"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}
