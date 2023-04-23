/**
 * Sample Skeleton for 'hello-view.fxml' Controller Class
 */

package com.example.demo;

import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.ResourceBundle;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.stage.FileChooser;
import javafx.stage.Stage;

public class HelloController implements Initializable {

    FileChooser fileChooser = new FileChooser();

    File csvFile;

    Tenant tenants;

    TenantCleaningManagement tenantCleaningManagement = new TenantCleaningManagement();

    @FXML // ResourceBundle that was given to the FXMLLoader
    private ResourceBundle resources;

    @FXML // URL location of the FXML file that was given to the FXMLLoader
    private URL location;

    @FXML // fx:id="currentWeek"
    private Label currentWeek; // Value injected by FXMLLoader

    @FXML // fx:id="customWeekTextField"
    private TextField customWeekTextField; // Value injected by FXMLLoader

    @FXML // fx:id="lastWeek"
    private Label lastWeek; // Value injected by FXMLLoader

    @FXML // fx:id="openTenantList"
    private Button openTenantList; // Value injected by FXMLLoader

    @FXML // fx:id="urlFile"
    private TextField urlFile; // Value injected by FXMLLoader

    @FXML // fx:id="welcomeText"
    private Label welcomeText; // Value injected by FXMLLoader

    @FXML // fx:id="errorLabel"
    private Label errorLabel; // Value injected by FXMLLoader

    @FXML
    void browseFileButton(ActionEvent event) {
        resetAllStatus();
        FileChooser.ExtensionFilter csvFilter = new FileChooser.ExtensionFilter("CSV files (*.csv)", "*.csv");
        fileChooser.getExtensionFilters().add(csvFilter);

        // Show the file chooser dialog
        Stage stage = new Stage();
        File selectedFile = fileChooser.showOpenDialog(stage);

        if (selectedFile != null) {
            // The user selected a file
            System.out.println("Selected file: " + selectedFile.getAbsolutePath());
            csvFile = selectedFile;
            urlFile.setText(selectedFile.getAbsolutePath());
            lastWeek.setText(Utils.getLastWeek(selectedFile.getAbsolutePath()));
        }
    }

    @FXML
    void convertPDFButton(ActionEvent event) {
        resetAllStatus();
        convertPDF();
    }

    public void convertPDF(){
        if(csvFile.exists()){
            try {
                Utils.convertToPdf(csvFile.getAbsolutePath());
                System.out.println("exported pdf Schedule successfully");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }else{
            errorLabel.setText("Cannot convert to PDF. There is no schedule found!. browse file to convert!");
        }

    }

    @FXML
    void exportFileButton(ActionEvent event) {
        File tenantListTxtFile = new File(".\\tenantList.txt");
        if(tenantListTxtFile.exists()){
            tenants = new Tenant(tenantListTxtFile.getAbsolutePath());
            if(Utils.isInteger(customWeekTextField.getText()) && Integer.parseInt(customWeekTextField.getText()) > Integer.parseInt(currentWeek.getText())){
                System.out.println("Using custom week");
                int week = Integer.parseInt(customWeekTextField.getText());
                setSchedule(week, tenants);
                try{
                    if(tenantCleaningManagement.writeScheduleFile()){
                        System.out.println("Write Schedule successfully");
                        csvFile = new File(".\\data.csv");
                        convertPDF();
                        errorLabel.setText("Exported Schedule!");
                    }else{
                        System.out.println("Write Schedule because 0 object");
                    }
                }catch(Exception e){
                    System.out.println("Failed to write!");
                }
            }else{
                if(Utils.isInteger(lastWeek.getText())){
                    System.out.println("Using last week");
                    int week = Integer.parseInt(lastWeek.getText());
                    setSchedule(week, tenants);
                    try{
                        if(tenantCleaningManagement.writeScheduleFile()){
                            System.out.println("Write Schedule successfully");
                            csvFile = new File(".\\data.csv");
                            convertPDF();
                            errorLabel.setText("Exported Schedule!");
                        }else{
                            System.out.println("Write Schedule because 0 object");
                        }
                    }catch(Exception e){
                        System.out.println("Failed to write!");
                    }
                }else{
                    if(!Utils.isInteger(lastWeek.getText()) && !Utils.isInteger(customWeekTextField.getText())){
                        System.out.println("Using current week");
                        int week = Utils.getCurrentNumberOfWeek();
                        setSchedule(week, tenants);
                        try{
                            if(tenantCleaningManagement.writeScheduleFile()){
                                System.out.println("Write Schedule successfully");
                                csvFile = new File(".\\data.csv");
                                convertPDF();
                                errorLabel.setText("Exported Schedule!");
                            }else{
                                System.out.println("Write Schedule because 0 object");
                            }
                        }catch(Exception e){
                            System.out.println("Failed to write!");
                        }
                    }
                }
            }
        }else{
            errorLabel.setText("Cannot found tenant List! Use button above to create tenant list!");
        }
    }

    @FXML
    void openExportedFolder(ActionEvent event){
        resetAllStatus();
        String folderPath = ".\\";
        File folder = new File(folderPath);
        try {
            Desktop.getDesktop().open(folder);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @FXML
    void openPdfFile(ActionEvent event){
        resetAllStatus();
        String filePath = ".\\schedule.pdf";
        File file = new File(filePath);
        Desktop desktop = Desktop.getDesktop();

        if(file.exists()){
            try {
                desktop.open(file);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }else{
            errorLabel.setText("Cannot find schedule.pdf file. Export or convert to PDF");
        }
    }

    @FXML
    void openTenantListButton(ActionEvent event) {
        resetAllStatus();
        Desktop desktop = Desktop.getDesktop();
        File file = new File(".\\tenantList.txt");
        if(file.exists()) {
            try {
                desktop.open(file);
            } catch (IOException e) {
                System.out.println(e.getMessage());
                throw new RuntimeException(e);
            }
        }else{
            try{
                System.out.println("Creating tenant list...");
                file.createNewFile();
                desktop.open(file);
            }catch (IOException e){
                System.out.println(e.getMessage());
                throw new RuntimeException(e);
            }
        }
    }

    @FXML // This method is called by the FXMLLoader when initialization is complete
    void initialize() {
        assert currentWeek != null : "fx:id=\"currentWeek\" was not injected: check your FXML file 'hello-view.fxml'.";
        assert customWeekTextField != null : "fx:id=\"customWeekTextField\" was not injected: check your FXML file 'hello-view.fxml'.";
        assert lastWeek != null : "fx:id=\"lastWeek\" was not injected: check your FXML file 'hello-view.fxml'.";
        assert openTenantList != null : "fx:id=\"openTenantList\" was not injected: check your FXML file 'hello-view.fxml'.";
        assert urlFile != null : "fx:id=\"urlFile\" was not injected: check your FXML file 'hello-view.fxml'.";
        assert welcomeText != null : "fx:id=\"welcomeText\" was not injected: check your FXML file 'hello-view.fxml'.";
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        fileChooser.setInitialDirectory(new File(".\\"));
        resetAllStatus();
    }

    public void resetAllStatus(){
        lastWeek.setText("");
        errorLabel.setText("");
        currentWeek.setText(String.valueOf(Utils.getCurrentNumberOfWeek()));
        customWeekTextField.setText("");
    }

    public void setSchedule(int startWeek, Tenant tenant){
        System.out.println(startWeek);
        for(String tenantName : tenant.getTenants()){
//            System.out.println(Utils.getDateRangeByWeek(weeks)+": " + tenantName);
            tenantCleaningManagement.addScheduleMap(Utils.getDateRangeByWeek(startWeek), tenantName);
            startWeek++;
        }
        tenantCleaningManagement.addScheduleMap(String.valueOf(startWeek),"LastWeek");
        System.out.println("Added to cleaning management");
    }
}
