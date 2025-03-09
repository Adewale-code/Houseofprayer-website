function payWithPaystack(category) {
    let amount = document.getElementById("amount").value;
    let email = document.getElementById("email").value;

    if (amount === "" || email === "") {
        alert("Please enter your email and amount.");
        return;
    }

    let handler = PaystackPop.setup({
        key: 'pk_live_182d138993f3cce01a4d70db5a22aef3ba96d0d2', // Replace with your Paystack Public Key
        email: email,
        amount: amount * 100, // Convert to kobo
        currency: "NGN",
        ref: category + "_" + Math.floor((Math.random() * 1000000000) + 1), // Unique ref
        metadata: {
            custom_fields: [
                {
                    display_name: "Payment Category",
                    variable_name: "payment_category",
                    value: category
                }
            ]
        },
        callback: function(response) {
            alert('Payment successful! Reference: ' + response.reference);
        },
        onClose: function() {
            alert('Transaction canceled.');
        }
    });

    handler.openIframe();
}
