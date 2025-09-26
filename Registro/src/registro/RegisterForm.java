package registro;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class RegisterForm extends JFrame {
    
    public RegisterForm() {
        // Título de la ventana
        setTitle("Formulario de Registro");
        setSize(400, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // centrar ventana

        // Panel principal
        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(12, 1, 10, 10));
        panel.setBackground(Color.WHITE);

        // Logo (texto)
        JLabel logo = new JLabel("elaAdmin", SwingConstants.CENTER);
        logo.setFont(new Font("Arial", Font.BOLD, 28));
        logo.setForeground(new Color(0, 180, 140));
        panel.add(logo);

        // Etiqueta y campo de usuario
        panel.add(new JLabel("USER NAME"));
        JTextField txtUser = new JTextField("User Name");
        ponerPlaceholder(txtUser, "User Name");
        panel.add(txtUser);

        // Etiqueta y campo de email
        panel.add(new JLabel("EMAIL ADDRESS"));
        JTextField txtEmail = new JTextField("Email");
        ponerPlaceholder(txtEmail, "Email");
        panel.add(txtEmail);

        // Etiqueta y campo de contraseña
        panel.add(new JLabel("PASSWORD"));
        JPasswordField txtPass = new JPasswordField("Password");
        ponerPlaceholderPassword(txtPass, "Password");
        panel.add(txtPass);

        // Checkbox
        JCheckBox terms = new JCheckBox("Agree the terms and policy");
        terms.setBackground(Color.WHITE);
        panel.add(terms);

        // Botón de registro
        JButton btnRegister = new JButton("REGISTER");
        btnRegister.setBackground(new Color(0, 123, 255));
        btnRegister.setForeground(Color.WHITE);
        panel.add(btnRegister);

        // Botón Facebook
        JButton btnFb = new JButton("REGISTER WITH FACEBOOK");
        btnFb.setBackground(new Color(59, 89, 152));
        btnFb.setForeground(Color.WHITE);
        panel.add(btnFb);

        // Botón Twitter
        JButton btnTw = new JButton("REGISTER WITH TWITTER");
        btnTw.setBackground(new Color(29, 161, 242));
        btnTw.setForeground(Color.WHITE);
        panel.add(btnTw);

        // Texto de login
        JLabel lblLogin = new JLabel("Already have account ? Sign in", SwingConstants.CENTER);
        lblLogin.setForeground(Color.GRAY);
        panel.add(lblLogin);

        add(panel);
    }

    // Método para simular placeholder en JTextField
    private void ponerPlaceholder(JTextField campo, String texto) {
        campo.setForeground(Color.GRAY);
        campo.addFocusListener(new FocusAdapter() {
            public void focusGained(FocusEvent e) {
                if (campo.getText().equals(texto)) {
                    campo.setText("");
                    campo.setForeground(Color.BLACK);
                }
            }
            public void focusLost(FocusEvent e) {
                if (campo.getText().isEmpty()) {
                    campo.setText(texto);
                    campo.setForeground(Color.GRAY);
                }
            }
        });
    }

    // Método para simular placeholder en JPasswordField
    private void ponerPlaceholderPassword(JPasswordField campo, String texto) {
        campo.setEchoChar((char)0);
        campo.setForeground(Color.GRAY);
        campo.addFocusListener(new FocusAdapter() {
            public void focusGained(FocusEvent e) {
                if (new String(campo.getPassword()).equals(texto)) {
                    campo.setText("");
                    campo.setForeground(Color.BLACK);
                    campo.setEchoChar('•');
                }
            }
            public void focusLost(FocusEvent e) {
                if (new String(campo.getPassword()).isEmpty()) {
                    campo.setText(texto);
                    campo.setForeground(Color.GRAY);
                    campo.setEchoChar((char)0);
                }
            }
        });
    }

    public static void main(String[] args) {
        RegisterForm ventana = new RegisterForm();
        ventana.setVisible(true);
    }
}
