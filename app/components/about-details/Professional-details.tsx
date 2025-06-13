import React from "react";
import { Text } from "../typography/Text";
import { Grid } from "../layout/Grid";

const ProfessionalDetails = () => {
  return (
    <div className="flex flex-col p-10 rounded shadow-lg shadow-teal-700 gap-10 dark:bg-black bg-white">
      <Grid
        colCount={2}
        className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10"
      >
        <Text
          text="Web Developer"
          isBold
          className="text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] text-primary_dark dark:text-cyan-500"
        />
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
            <Text
              text="NBY IT"
              className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-primary dark:text-cyan-200"
              isBold
            />
          <Text
            text="From January 2022 to November 2024"
            className="text-gray-700 dark:text-white text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px]"
          />
        </div>
      </Grid>
    </div>
  );
};

export default ProfessionalDetails;
