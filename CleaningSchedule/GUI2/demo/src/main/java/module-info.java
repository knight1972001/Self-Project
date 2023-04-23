module com.example.demo {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.desktop;
    requires com.opencsv;
    requires io;
    requires kernel;
    requires layout;


    opens com.example.demo to javafx.fxml;
    exports com.example.demo;
}