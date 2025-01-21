const Service = require('../models/Service');

// إضافة خدمة جديدة
exports.addService = async (req, res) => {
    try {
        const { name, image, description, price, categoryId } = req.body;
        const service = await Service.create({ name, image, description, price, categoryId });
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// عرض جميع الخدمات
exports.getServices = async (req, res) => {
    try {
        const services = await Service.findAll();
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// عرض خدمة واحدة
exports.getService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// تحديث خدمة
exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image, description, price, categoryId } = req.body;
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        service.name = name || service.name;
        service.image = image || service.image;
        service.description = description || service.description;
        service.price = price || service.price;
        service.categoryId = categoryId || service.categoryId;
        await service.save();
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// حذف خدمة
exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ error: 'Service not found' });
        }
        await service.destroy();
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
