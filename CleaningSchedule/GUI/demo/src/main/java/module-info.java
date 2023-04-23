module com.example.demo {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.web;
    requires javafx.graphics;
    requires javafx.swing;

    requires org.controlsfx.controls;
    requires com.dlsc.formsfx;
    requires net.synedra.validatorfx;
    requires org.kordamp.ikonli.javafx;
    requires org.kordamp.bootstrapfx.core;
    requires eu.hansolo.tilesfx;
    requires com.opencsv;
    requires io;
    requires kernel;
    requires layout;

    opens com.example.demo to javafx.fxml;
//    opens javafx.css.converter to eu.hansolo.fx.countries;
    exports com.example.demo;

}