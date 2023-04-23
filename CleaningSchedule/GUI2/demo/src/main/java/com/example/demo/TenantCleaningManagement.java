package com.example.demo;

import com.opencsv.CSVWriter;

import java.io.FileWriter;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;

public class TenantCleaningManagement {
    private Map<String, String> cleaningSchedule; //{NAME: "DATE"}

    public TenantCleaningManagement() {
        this.cleaningSchedule = new LinkedHashMap<String, String>();
    }

    public boolean addScheduleMap(String name, String date) {
        if (!cleaningSchedule.containsValue(name)) {
            cleaningSchedule.put(date, name);
            return true;
        } else {
            return false;
        }
    }

    public boolean writeScheduleFile() throws IOException {
        if (cleaningSchedule.size() > 0) {
            // create a writer object
            CSVWriter writer = new CSVWriter(new FileWriter("data.csv"));

            // write header row
            writer.writeNext(new String[]{"Name", "Date"});

            // write data rows
            for (Map.Entry<String, String> entry : cleaningSchedule.entrySet()) {
                writer.writeNext(new String[]{entry.getKey(), entry.getValue()});
            }
            // write header row
            writer.writeNext(new String[]{"Note:", "Recommend taking out the trash at least every two days. More is better. "});

            // close the writer
            writer.close();

            return true;
        } else {
            return false;
        }
    }

    public void cleanHashMap(){
        cleaningSchedule.clear();
    }

}
