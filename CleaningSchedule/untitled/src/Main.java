import java.io.File;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> tenantsList = new ArrayList<String>();
        tenantsList.add("Long");
        tenantsList.add("Khanh Nhi");
        tenantsList.add("Phuong Nhi");
        tenantsList.add("Yen Nhi");

        Tenant tenants = new Tenant(tenantsList);
        final int currentWeek = Utils.getCurrentNumberOfWeek();
        System.out.println(currentWeek);
        int weeks = currentWeek;

        TenantCleaningManagement tenantCleaning = new TenantCleaningManagement();

        File tenantListTxtFile = new File("C:\\Self_project\\CleaningSchedule\\GUI\\demo\\data.csv");
        if(tenantListTxtFile.exists()){
            System.out.println("Found");
            System.out.println(Utils.getLastWeek(tenantListTxtFile.getAbsolutePath()));
        }


        for(String tenantName : tenants.getTenants()){
//            System.out.println(Utils.getDateRangeByWeek(weeks)+": " + tenantName);
            tenantCleaning.addScheduleMap(Utils.getDateRangeByWeek(weeks), tenantName);
            weeks++;
        }
        tenantCleaning.addScheduleMap(String.valueOf(weeks),"LastWeek");

        try{
            if(tenantCleaning.writeScheduleFile()){
                System.out.println("Write Schedule successfully");
                Utils.convertToPdf();
                System.out.println("exported pdf Schedule successfully");
            }else{
                System.out.println("Write Schedule because 0 object");
            }
        }catch(Exception e){
            System.out.println("Failed to write!");
        }


    }
}