import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

public class Tenant {
    private ArrayList<String> tenants= new ArrayList<String>();

    public Tenant(ArrayList<String> tenant) {
        this.tenants.addAll(tenant);
    }

    public Tenant(String fileName){
        if(fileName == "" || fileName == null){
            fileName = "tenantsList.txt";
        }
        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(";");
                for (String value : values) {
                    tenants.add(value);
                }
            }
        } catch (IOException e) {
            System.err.format("IOException: %s%n", e);
        }
    }

    public boolean saveTenantsList(){
        String fileName = "tenantsList.txt";
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            for (String name : tenants) {
                writer.write(name);
                if (tenants.indexOf(name) != tenants.size() - 1) {
                    writer.write(";");
                }
            }
            return true;
        } catch (IOException e) {
            System.err.format("IOException: %s%n", e);
            return false;
        }
    }

    public boolean addTenant(String tenantName){
        if(!tenants.contains(tenantName)){
            tenants.add(tenantName);
            return true;
        }else{
            return false;
        }
    }

    public boolean deleteTenant(String tenantName){
        return tenants.remove(tenantName);
    }

    public boolean containsTenant(String tenantName){
        return tenants.contains(tenantName);
    }

    public boolean swapTenantsPosition(String tenantName1, String tenantName2){
        if(tenants.contains(tenantName1) && tenants.contains(tenantName2)){
            int tenant1Index = (int)tenants.indexOf(tenantName1);
            int tenant2Index = (int)tenants.indexOf(tenantName2);

            Collections.swap(tenants, tenant1Index, tenant2Index);
            return true;
        }else{
            return false;
        }
    }

    public ArrayList<String> getTenants(){
        return tenants;
    }

    public String getSingleTenantName(int tenantIndex){
        return tenants.get(tenantIndex);
    }
}
