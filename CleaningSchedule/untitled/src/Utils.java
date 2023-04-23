import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.time.temporal.WeekFields;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class Utils {
    public static String getDateRangeByWeek(int weekNumber){
        LocalDate date = LocalDate.now().with(TemporalAdjusters.firstDayOfYear())
                .plusWeeks(weekNumber).with(TemporalAdjusters.previousOrSame(LocalDate.of(1, 1, 1).getDayOfWeek()));
        LocalDate firstDate = date.with(TemporalAdjusters.previousOrSame(LocalDate.of(1, 1, 1).getDayOfWeek()));
        LocalDate lastDate = firstDate.plusDays(6);
        String firstDateString = firstDate.format(DateTimeFormatter.ofPattern("MMMM dd"));
        String lastDateString = lastDate.format(DateTimeFormatter.ofPattern("MMMM dd"));

        return firstDateString + " - " + lastDateString;
    }

    public static int getCurrentNumberOfWeek(){
        LocalDate currentDate = LocalDate.now();
        int currentWeekNumber = currentDate.get(WeekFields.of(Locale.getDefault()).weekOfWeekBasedYear());
        return currentWeekNumber;
    }

    public static void convertToPdf() throws IOException {
        String csvFilePath = "data.csv";
        String pdfFilePath = "schedule.pdf";
        BufferedReader csvReader = new BufferedReader(new FileReader(csvFilePath));
        PdfWriter pdfWriter = new PdfWriter(pdfFilePath);
        PdfDocument pdfDocument = new PdfDocument(pdfWriter);
        Document document = new Document(pdfDocument, PageSize.A4.rotate());
        PdfFont font = PdfFontFactory.createFont(StandardFonts.HELVETICA);
        Table table = new Table(new float[]{4, 4, 4, 4, 4, 4, 4, 4, 4, 4});
        String row;
        while ((row = csvReader.readLine()) != null) {
            String[] data = row.split(",");
            for (String cellData : data) {
                Cell cell = new Cell().add(new Paragraph(cellData.trim())).setFont(font);
                table.addCell(cell);
            }
            table.startNewRow();
        }
        document.add(table);
        document.close();
        csvReader.close();
    }

    public static int getLastWeek(String fileName){
        // Create a map to store the values
        Map<String, String> map = new HashMap<>();
        int lastWeekInt=0;
        try {
            System.out.println(fileName);
            // Create a CSV reader
            CSVReader reader = new CSVReader(new FileReader(fileName));

            // Read the CSV file line by line
            String[] line;
            while ((line = reader.readNext()) != null) {
                // Add the key-value pair to the map
                map.put(line[0], line[1]);
            }
            // Get the value of the "LastWeek" key
            String lastWeek = map.get("LastWeek");
            // Print the value
            lastWeekInt =  Integer.parseInt(lastWeek);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }
        return lastWeekInt;
    }
}
